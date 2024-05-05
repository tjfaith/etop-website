type ButtonStyle = "primary" | "secondary"
type ButtonType = "submit" | "button"
export interface ButtonProps{
    style?: ButtonStyle;
    className?:string;
    label:string;
    onClick:()=>void;
    type?:ButtonType;
}