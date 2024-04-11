import Select from 'react-select'
import styled from 'styled-components'

const bg = '#ED165F'

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: (provided) => ({
			...provided,
			background: '#fff',
			fontSize: 'calc(14px + (2 + 2 * 0.8) * ((100vw - 320px) / 1440))',
			color: '#000',
			width: '200px',
			border: '1px solid #000',
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			background: '#fff',
			'&:hover': {
				background: '#ED165F',
				color: '#fff'
			},
		}),
	},
})``;
