import { theme } from './theme';
import { text } from './typography';

export const container = {
  height: 60,
  borderRadius: 15,
  backgroundColor: theme.colors.white,
  width: '100%' as '100%',
};

export const textInput = {
  ...text,
  fontFamily: 'UnboundedLight',
};
