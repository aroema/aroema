
export type SelectOptionProps = {
    value: string,
    text: string,
}

export default function SelectOption({
    value,
    text,
}:SelectOptionProps) {
    return (
        <option value={value}>
            {text}
        </option>
    )
}