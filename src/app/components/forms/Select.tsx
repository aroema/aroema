import SelectOption, { SelectOptionProps } from "./SelectOption"
import style from './style.module.css'

export default function Select({
    id,
    name,
    value,
    required = false,
    placeholder,
    options = [],
    props,
    children,
}:{
    id?: string,
    name: string,
    value?: string,
    required?: boolean,
    placeholder?: string,
    options?: Array<SelectOptionProps>
    props?: object,
    children?: React.ReactNode,
}) {
    return (
        <select
            id={id ?? name}
            name={name}
            value={value}
            required={required}
            placeholder={placeholder}
            className={style.select}
            {...props}>
                {
                    children ?? 
                    options.map((option) => <SelectOption {...option} key={option.value} />)
                }
        </select>
    )
}