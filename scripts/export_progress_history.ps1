$transcriptPath = "C:\Users\thomv\.gemini\antigravity\brain\7248ebbd-2a6b-4692-bb06-c54158bca507\.system_generated\logs\transcript.jsonl"
$outputPath = "c:\Dev Projects\Weekly_Chores\Weekly-Chores\docs\PROJECT_PROGRESS_AND_CONVERSATION_HISTORY.md"

$docsDir = "c:\Dev Projects\Weekly_Chores\Weekly-Chores\docs"
if (-not (Test-Path $docsDir)) {
    New-Item -ItemType Directory -Path $docsDir -Force | Out-Null
}

$lines = [System.Collections.Generic.List[string]]::new()
$lines.Add("# Household Hub — Project Progress & Conversation History")
$lines.Add("")
$lines.Add("> **Export Date**: " + (Get-Date).ToString("yyyy-MM-dd HH:mm:ss"))
$lines.Add("> **Project**: Weekly Chores Household Hub")
$lines.Add("> **Repository**: https://github.com/jetlag81/Weekly-Chores")
$lines.Add("")
$lines.Add("---")
$lines.Add("")
$lines.Add("## Major Features & Engineering Milestones Delivered")
$lines.Add("")
$lines.Add("1. **Giphy API 100 Calls/Hr Rate-Limiter, Quota Monitor & Zero-Downtime Fallback** (`src/giphyService.ts`, `src/HouseholdSettingsModal.tsx`, `src/ParentNudgeModal.tsx`):")
$lines.Add("   - Automatic sliding 60-minute window call logger in `localStorage`.")
$lines.Add("   - Soft limit at 80 calls/hr that pauses background preloading to preserve quota for user searches.")
$lines.Add("   - Hard limit at 95 calls/hr that protects from 429 lockouts.")
$lines.Add("   - 12-hour persistent queue caching so reloads/tabs don't burn calls.")
$lines.Add("   - 3-hour search query cache.")
$lines.Add("   - Real-time Quota Monitor gauge & progress bar in Household Settings.")
$lines.Add("   - In-drawer live quota badge in Parent Nudge modal.")
$lines.Add("   - Seamless fallback to curated local cartoon GIF library (`src/gifCelebrations.ts`).")
$lines.Add("")
$lines.Add("2. **Weekly Schedule WHO Assignment Dropdowns Standardization** (`weekly_chores_household_hub.tsx`):")
$lines.Add("   - Standardized all WHO assignment dropdowns in the Weekly Schedule table and Day Schedule modal.")
$lines.Add("   - Dropdowns now uniformly contain only first names: `Thom`, `Meghan`, `Sydney`, `Cadence`, `Mason`, `Koda`, `Keyanna`.")
$lines.Add("   - Removed bulky optgroups, roles (`Overseer Supreme`), and group choices.")
$lines.Add("   - Full first-name normalization in roster and badge coloring.")
$lines.Add("")
$lines.Add("3. **Bi-Weekly Custody Scheduling Intelligence** (`weekly_chores_household_hub.tsx`):")
$lines.Add("   - Fixed auto-assignment for Cadence & Mason to strictly follow the alternating bi-weekly schedule.")
$lines.Add("   - Accurate transition awareness for Sundays at 5:00 PM, preventing scheduling on away weeks.")
$lines.Add("")
$lines.Add("4. **Feed the Herd Task Alignment** (`src/choreUtils.ts`):")
$lines.Add("   - Resolved task key matching so weekly chore descriptions don't overwrite Monday daily assignments.")
$lines.Add("")
$lines.Add("5. **Theme & UI Modernization** (`weekly_chores_household_hub.tsx`):")
$lines.Add("   - Dark/Light mode theme button nested under Settings menu.")
$lines.Add("   - Themed Print Schedule button.")
$lines.Add("   - Cleaned up borders and high-contrast lines above day headers.")
$lines.Add("   - Streamlined mobile Parent Hub action buttons with larger icons and concise labels.")
$lines.Add("")
$lines.Add("6. **Reload Notification Suppression** (`src/activityFeed.ts` / `src/firebaseSync.ts`):")
$lines.Add("   - Prevented phantom popups / nudges from showing on initial page reloads.")
$lines.Add("")
$lines.Add("---")
$lines.Add("")
$lines.Add("## Chronological Conversation Log")
$lines.Add("")

$fileStream = [System.IO.File]::OpenRead($transcriptPath)
$streamReader = [System.IO.StreamReader]::new($fileStream, [System.Text.Encoding]::UTF8)

$turnCount = 1
$pendingUser = $null
$pendingUserTime = $null

while (-not $streamReader.EndOfStream) {
    $rawLine = $streamReader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($rawLine)) { continue }
    
    try {
        $json = $rawLine | ConvertFrom-Json
    } catch {
        continue
    }

    if ($json.type -eq "USER_INPUT") {
        $content = [string]$json.content
        if ($content -match "<USER_REQUEST>([\s\S]*?)</USER_REQUEST>") {
            $content = $matches[1].Trim()
        }
        if ($content.StartsWith("<CONTEXT_SUMMARY>") -or $content.StartsWith("<SYSTEM_")) {
            continue
        }
        if (-not [string]::IsNullOrWhiteSpace($content)) {
            $pendingUser = $content
            $pendingUserTime = $json.created_at
        }
    }
    elseif ($json.type -eq "PLANNER_RESPONSE" -and $pendingUser) {
        $content = [string]$json.content
        if (-not [string]::IsNullOrWhiteSpace($content) -and $content.Length -gt 15) {
            # Skip internal tool execution status
            if (-not ($content.StartsWith("Executing tool") -or $content.StartsWith("<tool_call>"))) {
                $lines.Add("### Turn $turnCount")
                $lines.Add("**Date / Time**: $pendingUserTime")
                $lines.Add("")
                $lines.Add("**User Request**:")
                $lines.Add("> " + ($pendingUser -replace "`n", "`n> "))
                $lines.Add("")
                $lines.Add("**Assistant Response**:")
                $lines.Add($content.Trim())
                $lines.Add("")
                $lines.Add("---")
                $lines.Add("")

                $turnCount++
                $pendingUser = $null
            }
        }
    }
}

$streamReader.Close()
$fileStream.Close()

[System.IO.File]::WriteAllLines($outputPath, $lines, [System.Text.Encoding]::UTF8)
Write-Output "Export successfully written to $outputPath"
