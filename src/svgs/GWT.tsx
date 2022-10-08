import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  fill: ${(props) => props.theme.fill6};
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});
`

export function GWT() {
  return (
    <SVG viewBox="1 -4 18 21" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.119 2.171a.19.19 0 0 0 0-.266L6.269.055a.19.19 0 0 0-.266 0L.054 6a.19.19 0 0 0 0 .266l5.948 5.948a.19.19 0 0 0 .266 0l1.85-1.85a.19.19 0 0 0 0-.266l-3.827-3.83a.19.19 0 0 1 0-.266l3.828-3.831ZM14 .054a.19.19 0 0 0-.267 0l-5.94 5.938a.19.19 0 0 0 0 .266l1.85 1.853a.19.19 0 0 0 .267 0l3.823-3.823a.19.19 0 0 1 .267 0L15.712 6a.19.19 0 0 1 0 .266l-3.828 3.828a.19.19 0 0 0 0 .266l1.85 1.85a.19.19 0 0 0 .267 0l5.945-5.945a.19.19 0 0 0 0-.266L14 .054Z" />
    </SVG>
  )
}