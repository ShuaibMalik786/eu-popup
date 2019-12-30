export class DialogConfig {
  type?: string;
  title?: string;
  text?: string;
  showCancelButton?: boolean;
  showOkButton?: boolean;
  cancelButtonText?: string;
  confirmButtonText?: string;
  dismissOnClickOutside? = true;
  confirmButtonBgColor?: string;
  cancelButtonBgColor?: string;
  cancelButtonTextColor?: string;
  confirmButtonTextColor?: string;
}
