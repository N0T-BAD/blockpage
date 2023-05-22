import BlockUsepageHeader from "./header/BlockUsepageHeader";

export default function BlockChargeLayout(props: { children: React.ReactNode }) {

    return (
        <>
            <BlockUsepageHeader />
            <div>{props.children}</div>
        </>
    )
}