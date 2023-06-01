import EpisodeHeader from "./EpisodeHeader";

interface EpisodeListProps {
    webtoonId: number;
    children: React.ReactNode
}

export default function EpisodeLayout(props: EpisodeListProps) {
    const { webtoonId } = props;

    return (
        <>
            <EpisodeHeader webtoonId={webtoonId} />
            <div>{props.children}</div>
        </>
    )
}