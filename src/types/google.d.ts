
// Type definitions for Google Identity Services
interface CredentialResponse {
  credential: string;
  selectBy?: string;
  clientId?: string;
}

interface GsiButtonConfiguration {
  type: 'standard' | 'icon';
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  size?: 'large' | 'medium' | 'small';
  text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
  shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  logo_alignment?: 'left' | 'center';
  width?: string;
  locale?: string;
}

interface PromptNotification {
  isNotDisplayed: boolean;
  isSkippedMoment: boolean;
  isDismissedMoment?: boolean;
  dismissedReason?: string;
  getMomentType: () => string;
}

interface IdConfiguration {
  client_id: string;
  auto_select?: boolean;
  callback?: (response: CredentialResponse) => void;
  login_uri?: string;
  native_callback?: Function;
  cancel_on_tap_outside?: boolean;
  prompt_parent_id?: string;
  nonce?: string;
  context?: string;
  state_cookie_domain?: string;
  ux_mode?: 'popup' | 'redirect';
  allowed_parent_origin?: string | string[];
  intermediate_iframe_close_callback?: Function;
}

interface GsiButtonElement {
  renderButton(parent: HTMLElement, options: GsiButtonConfiguration): void;
  prompt(): void;
}

interface Google {
  accounts: {
    id: {
      initialize: (config: IdConfiguration) => void;
      prompt: (callback?: (notification: PromptNotification) => void) => void;
      renderButton: (parent: HTMLElement, options: GsiButtonConfiguration) => void;
      disableAutoSelect: () => void;
    };
    oauth2: {
      initTokenClient: (config: any) => any;
    };
  };
}

// Add Google to the Window interface
interface Window {
  google?: Google;
}
