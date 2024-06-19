import { InputProps, TabsProps } from '@nextui-org/react';
import {Dispatch, ReactNode, SetStateAction} from 'react'
type ButtonStyle = "primary" | "secondary"
type ButtonType = "submit" | "button"
export interface ButtonProps{
    style?: ButtonStyle;
    className?:string;
    label:string;
    isLoading?:boolean;
    onClick:()=>void;
    type?:ButtonType;
}

export interface HighlightedTextProps{
    text:string
}

export interface LoaderProps {
    color?: string;
    loading?: boolean;
    size?: number;
    fullScreen?: boolean;
  }

export interface CustomAccordionProps {
    items: {
       title:string,
       content: ReactNode | string 
    }[]
}

type InputType = 'phone' | InputProps["type"]
export interface CustomInputProps extends InputProps{
    phone?:string;
    setPhone?: Dispatch<SetStateAction<string>>
    type?: InputType;
    required?: boolean;
}

export interface CustomSelectProps{
    placeholder:string;
    label:string;
    required?:boolean;
    data:{
        label:string,
        value:any,
        description?:string,
    }[]
}

export interface CustomTabProps extends TabsProps{
    data: {
        title:string,
        content: ReactNode | string 
     }[]
}