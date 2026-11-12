package com.household.choreshub;

import android.os.Bundle;
import android.view.View;
import androidx.activity.EdgeToEdge;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        EdgeToEdge.enable(this);
        super.onCreate(savedInstanceState);

        // Ensure native Android ActionBar is completely removed
        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }
        if (getActionBar() != null) {
            getActionBar().hide();
        }

        // Pass exact status bar and navigation bar insets to CSS variables
        View contentView = findViewById(android.R.id.content);
        if (contentView != null) {
            ViewCompat.setOnApplyWindowInsetsListener(contentView, (v, windowInsets) -> {
                Insets statusBars = windowInsets.getInsets(WindowInsetsCompat.Type.statusBars());
                Insets navBars = windowInsets.getInsets(WindowInsetsCompat.Type.navigationBars());

                float density = getResources().getDisplayMetrics().density;
                int topDp = Math.round(statusBars.top / density);
                int bottomDp = Math.round(navBars.bottom / density);

                if (getBridge() != null && getBridge().getWebView() != null) {
                    getBridge().getWebView().post(() -> {
                        String js = String.format(
                            "document.documentElement.style.setProperty('--safe-area-inset-top', '%dpx');" +
                            "document.documentElement.style.setProperty('--safe-area-inset-bottom', '%dpx');",
                            topDp, bottomDp
                        );
                        getBridge().getWebView().evaluateJavascript(js, null);
                    });
                }
                return windowInsets;
            });
        }
    }
}
