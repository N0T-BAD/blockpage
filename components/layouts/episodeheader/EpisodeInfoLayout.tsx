import EpisodeInfoHeader from "./EpisodeInfoHeader";


export default function EpisodeInfoLayout(props: { children: React.ReactNode }) {

    return (
        <>
            <EpisodeInfoHeader />
            <div>{props.children}</div>
        </>
    )
}