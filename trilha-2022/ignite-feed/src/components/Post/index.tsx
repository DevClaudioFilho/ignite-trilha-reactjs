import styles from './styles.module.css';
import { Comment } from '../Comment';
import { Avatar } from '../Avatar';
import { format } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
	name: string;
	role: string;
}
interface Content {
	type: string;
	content: string;
}

interface PostProps {
	author: Author;
	content: Content[];
	publisheAt: Date;
}

export function Post({ author, content, publisheAt }: PostProps) {
	const [comments, setComments] = useState<string[]>([]);
	const [newCommentsText, setNewCommentsText] = useState('');

	const publisheDateFormated = format(
		publisheAt,
		"dd 'de' LLLL 'às' HH:MM'h'",
		{ locale: ptBR }
	);

	const publisheDateRelativeNow = formatDistanceToNow(publisheAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreateNewComment(event: FormEvent) {
		event.preventDefault();

		setComments([...comments, newCommentsText]);
		setNewCommentsText('');
	}

	function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('');

		setNewCommentsText(event.target.value);
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório');
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeleteOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});
		setComments(commentsWithoutDeleteOne);
	}

	const isNewCommentEmpty = newCommentsText.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar
						src='https://github.com/DevClaudioFilho.png'
						alt='Foto de perfil'
					/>
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publisheDateFormated} dateTime={publisheAt.toISOString()}>
					{publisheDateRelativeNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={Math.random()}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={Math.random()}>
								<a href=''>{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					name='comment'
					value={newCommentsText}
					onChange={handleNewCommentChange}
					placeholder='Deixe seu comentario'
					onInvalid={handleNewCommentInvalid}
					required
				/>

				<footer>
					<button type='submit' disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
