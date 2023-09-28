import dynamic from "next/dynamic";

const RichTextExample = dynamic(() => import("../../components/editor"), {
    ssr: false,
});
const Home = () => {
    return (
        <div>
            <RichTextExample />
        </div>
    );
};

export default Home;
