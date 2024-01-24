import { theme } from './theme';

export const text = {
  color: theme.colors.text,
  fontFamily: 'Unbounded',
};

export const logo = {
  ...text,
  fontSize: 32,
  fontFamily: 'UnboundedBold',
  letterSpacing: 1.6,
};

export const mainHeader = {
  ...text,
  letterSpacing: 1.2,
  fontSize: 24,
  fontFamily: 'UnboundedBold',
};

export const small = {
  ...text,
  fontSize: 11,
  fontFamily: 'UnboundedLight',
  lineHeight: 14.3,
};

export const capsLock = {
  ...text,
  fontSize: 10,
  fontFamily: 'UnboundedLight',
  textTransform: 'uppercase' as 'uppercase',
};

export const buttonText = {
  ...text,
  color: theme.colors.white,
  fontSize: 14,
  fontFamily: 'UnboundedBold',
  textTransform: 'uppercase' as 'uppercase',
};

export const header = {
  ...text,
  fontSize: 16,
  fontFamily: 'UnboundedSemiBold',
  letterSpacing: 0.8,
};

export const navigationHeader = {
  ...header,
  fontFamily: 'UnboundedBold',
};

export const link = {
  ...text,
  color: theme.colors.primary[600],
  fontFamily: 'UnboundedLight',
};

export const secondaryLink = {
  ...text,
  color: theme.colors.secondary,
  fontFamily: 'UnboundedLight',
};
