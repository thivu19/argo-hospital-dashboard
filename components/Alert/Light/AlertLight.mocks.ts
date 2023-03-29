import { IAlert } from './AlertLight';

const base: IAlert = {
  sampleTextProp: 'Hello world!',
  errors: '2',
};

export const mockBaseTemplateProps = {
  base,
};
