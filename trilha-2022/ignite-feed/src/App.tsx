import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "'https://github.com/DevClaudioFilho.png' ",
			name: 'Claudio Filho',
			role: 'Web Developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Como dizia Bill Gates',
			},
			{
				type: 'paragraph',
				content: 'Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.',
			},
			{
				type: 'link',
				content: 'Teste',
			},
		],
		publisheAt: new Date('2022-05-03 23:00:00'),
	},
];

export function App() {
	return (
		<>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								content={post.content}
								author={post.author}
								publisheAt={post.publisheAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}
