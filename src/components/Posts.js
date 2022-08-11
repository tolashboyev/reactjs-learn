import Postlist from './Postlist';

export default function Posts(props) {
    return (
        props.post.map((post) => (
            <Postlist key ={post.id} name={post.name} />
        ))
    )
}