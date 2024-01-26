import { theme } from './theme';

export const buttonDefault = {
  height: 60,
  borderRadius: 15,
};

export const shadow = {
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.6,
  shadowRadius: 6,
  elevation: 10,
};

export const disabled = {
  ...buttonDefault,
  backgroundColor: theme.colors.border,
};
