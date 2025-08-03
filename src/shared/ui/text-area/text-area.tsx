import { useState, type FC, type ReactNode } from 'react'
import style from './text-area.module.css'
import TextArea from 'antd/es/input/TextArea'

interface InputProps {
	label?: string
	placeholder?: string
	value?: string | number
	name?: string
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	helperText?: string
	error?: boolean
	children?: ReactNode
}

export const FormTextArea: FC<InputProps> = ({
	label = '',
	placeholder = '',
	value,
	onChange,
	helperText = '',
	error = false,
	children,
	name = '',
}) => {
	const [innerValue, setInnerValue] = useState('')

	const inputValue = value !== undefined ? value : innerValue

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (onChange) {
			onChange(e)
		} else {
			setInnerValue(e.target.value)
		}
	}

	return (
		<div className={style.wrapper}>
			<div className={style.inputContainer}>
				{label && (
					<label htmlFor={name} className={style.label}>
						{label}
					</label>
				)}
				<TextArea
					id={name}
					className={`${style.input} ${error ? style.error : ''}`}
					placeholder={placeholder}
					value={inputValue}
					onChange={handleChange}
					name={name}
				/>
			</div>
			{helperText && (
				<span
					className={`${style.helperText} ${error ? style.errorText : ''}  `}
				>
					{helperText}
				</span>
			)}
			{children}
		</div>
	)
}
