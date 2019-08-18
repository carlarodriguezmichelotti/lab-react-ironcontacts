import React from 'react'

const Card = ({ name, popularity, pictureUrl, deleteContact }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>
				<img className='pictureclass' src={pictureUrl} />
			</td>
			<td>{popularity}</td>
			<button onClick={deleteContact}>Delete</button>
		</tr>
	)
}

export default Card
