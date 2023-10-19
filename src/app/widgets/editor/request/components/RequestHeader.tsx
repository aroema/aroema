import InputGroup from '../../../../components/forms/InputGroup'
import Select from '../../../../components/forms/Select'
import Input from '../../../../components/forms/Input'
import Button from '../../../../components/forms/Button'
import { SelectOptionProps } from '../../../../components/forms/SelectOption'
import style from '../style.module.css'

export default function RequestHeader() {
    const methods: Array<SelectOptionProps> = [
        { text: 'GET', value: 'GET' },
        { text: 'POST', value: 'POST' },
        { text: 'PUT', value: 'PUT' },
        { text: 'PATCH', value: 'PATCH' },
        { text: 'DELETE', value: 'DELETE' },
        { text: 'HEAD', value: 'HEAD' },
        { text: 'OPTIONS', value: 'OPTIONS' },
    ]

    return (
        <InputGroup className={style.grow}>
            <Select name='method' options={methods}></Select>
            <Input name='url' placeholder='https://example.com' className={style.grow}></Input>
            <Button text='Send' primary />
        </InputGroup>
    )
}