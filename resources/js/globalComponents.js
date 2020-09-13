import CardIconHeader from "@/custom_components/Cards/CardIconHeader";
import ControlButton from "@/custom_components/Buttons/ControlButton";
import DropDown from "./components/Dropdown.vue";
import ProgressBarLoading from "@/custom_components/ProgressBar/ProgressBarLoading";
import RouterButtonLink from "@/custom_components/Buttons/RouterButtonLink";
import { SlideYDownTransition } from 'vue2-transitions'
import UploadButton from "@/custom_components/Buttons/UploadButton";
import VImage from "@/custom_components/VForm/VImage";
import VInput from "@/custom_components/VForm/VInput";
import VSwitch from "@/custom_components/VForm/VSwitch";
import VTextarea from "@/custom_components/VForm/VTextarea";

const GlobalComponents = {
  install(Vue) {
    Vue.component("card-icon-header", CardIconHeader);
    Vue.component("control-button", ControlButton);
    Vue.component("drop-down", DropDown);
    Vue.component("progress-bar-loading", ProgressBarLoading);
    Vue.component("router-button-link", RouterButtonLink);
    Vue.component("slide-y-down-transition", SlideYDownTransition);
    Vue.component("upload-button", UploadButton);
    Vue.component("v-image", VImage);
    Vue.component("v-input", VInput);
    Vue.component("v-switch", VSwitch);
    Vue.component("v-textarea", VTextarea);
  }
};

export default GlobalComponents;
