import Select from 'react-select'
import styled from 'styled-components'


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
		  background: state.isSelected ? '#ED165F' : '#fff', // Изменение цвета для активной категории
		  color: state.isSelected ? '#fff' : '#000',          // Изменение цвета текста для активной категории
		  '&:hover': {
			  background: '#ED165F',
			  color: '#fff'
		  },
		  '&:focus': {
			  background: '#ED165F',
			  color: '#fff'
		  }
		}),
		singleValue: (provided, state) => ({
			...provided,
			color: state.isFocused ? '#ED165F' : '#000'
		})
	}
})``;
