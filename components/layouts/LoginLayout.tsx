import LoginHeader from "./header/LoginHeader"

export default function LoginLayout(props: { children: React.ReactNode }) {

    return (
        <>
            <LoginHeader />
            <div>{props.children}</div>
        </>
    )
}