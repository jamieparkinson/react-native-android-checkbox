package com.mikemonteith.reactnativeandroidcheckbox;

import com.facebook.react.uimanager.ThemedReactContext;
import android.support.v7.widget.AppCompatCheckBox;

public class CheckBoxView extends AppCompatCheckBox {

    private boolean mAllowChange;
    private ThemedReactContext mReactContext;

    public CheckBoxView(ThemedReactContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
        mAllowChange = true;
    }

    @Override
    public void setChecked(boolean checked) {
        if (mAllowChange) {
            mAllowChange = false;
            super.setChecked(checked);
        }
    }

    void setOn(boolean on) {
        // If the switch has a different value than the value sent by JS, we must change it.
        if (isChecked() != on) {
            super.setChecked(on);
        }
        mAllowChange = true;
    }

    public ThemedReactContext getReactContext() {
        return mReactContext;
    }
}
