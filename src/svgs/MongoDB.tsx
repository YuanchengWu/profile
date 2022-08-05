import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});

  .darker {
    fill: ${(props) => props.theme.fill3};
  }

  .dark {
    fill: ${(props) => props.theme.fill4};
  }

  .light {
    fill: ${(props) => props.theme.fill6};
  }
`

export function MongoDB() {
  return (
    <SVG viewBox="0 0 8 18" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          className="darker"
          d="M4.25 18l-.4-.17s.05-2.48-.68-2.66c-.49-.69.08-29.23 1.83-.1 0 0-.6.38-.71 1-.12.62-.04 1.93-.04 1.93z"
        />
        <path
          className="dark"
          d="M4.72 16s4.1-2.83 3.13-8.72C6.93 3 4.75 1.6 4.51 1.06 4.25.67 4 0 4 0l.17 11.91c0 .01-.35 3.65.55 4.09"
        />
        <path
          className="light"
          d="M3.54 16S-.2 13.28.01 8.48C.22 3.68 2.88 1.33 3.39.9c.33-.38.34-.52.37-.9.23.53.19 7.97.22 8.85.1 3.37-.18 6.51-.44 7.15z"
        />
      </g>
    </SVG>
  )
}
