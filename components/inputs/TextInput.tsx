export interface ITextInput {
  sampleTextProp: string;
}

const TextInput: React.FC<ITextInput> = ({ sampleTextProp }) => {
  return <input type="text" value={sampleTextProp}></input>;
};

export default TextInput;
