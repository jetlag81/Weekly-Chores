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

        // Keep WebView full-screen (edge-to-edge) without white letterboxing,
        // and inject the exact Pixel system bar insets into CSS variables.
        View contentView = findViewById(android.R.id.content);
        if (contentView != null) {
            ViewCompat.setOnApplyWindowInsetsListener(contentView, (v, windowInsets) -> {
                Insets insets = windowInsets.getInsets(
                    WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout()
                );
                float density = getResources().getDisplayMetrics().density;
                int topDp = Math.round(insets.top / density);
                int bottomDp = Math.round(insets.bottom / density);

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
