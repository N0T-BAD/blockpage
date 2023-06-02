import style from '@/components/ui/Radio.module.css'

export default function Radio(props: { text: string, value: number, defaultChecked?: boolean, disabled?: boolean, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <label className={style.label}>
      <input
        className={style.radioBtn}
        type="radio"
        value={props.value}
        name="type"
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
        onChange={props.handleChange}
      />
      <span className={style.span}>{props.text}</span>
    </label>
  )
}
