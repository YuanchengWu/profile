import styled from 'styled-components'

const SVG = styled.svg`
  min-width: 18px;
  height: 18px;
  margin-right: 0.5em;
  filter: drop-shadow(0px 0px 8px ${(props) => props.theme.fill3})
    drop-shadow(0px 0px 16px ${(props) => props.theme.fill3});

  .dark {
    fill: ${(props) => props.theme.fill4};
  }

  .light {
    fill: ${(props) => props.theme.fill6};
  }
`

export function ReactSpring() {
  return (
    <SVG viewBox="4 3 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        className="light"
        d="M6.205 6.94a.29.29 0 0 0-.18.12.345.345 0 0 0-.042.275c.022.07.143.212.277.308-.133.173-.388.522-.511.7-.896 1.298-1.421 2.485-1.488 3.341-.036.463.054.786.267 1.038.157.185.342.29.639.354.244.052.617.05.993-.008-.236.34-.574.86-.749 1.156-.287.492-.582 1.121-.692 1.481-.195.628-.22 1.143-.09 1.635.079.302.207.544.38.73.177.19.402.322.677.397.451.122 1.113.087 1.948-.11.176-.04.447-.116.648-.176-.18.629-.16 1.203.042 1.614.065.133.248.356.357.438.651.487 2.021.469 3.86-.108.147-.046.563-.19.77-.265.141.19.273.264.579.3a.81.81 0 0 0 .517-.099.38.38 0 0 0 .136-.119.214.214 0 0 0 .019-.2.224.224 0 0 0-.129-.141.562.562 0 0 0-.184-.037c-.07-.004-.096-.007-.133-.034l.011-.01a19.6 19.6 0 0 0 1.446-.722c1.568-.875 3.244-2.108 4.36-3.209 1.012-.996 1.992-2.24 2.194-2.773a.852.852 0 0 0 .052-.455c-.021-.1-.034-.128-.131-.244-.103-.123-.125-.134-.22-.172-.316-.124-.804.013-1.767.6-1.231.753-3.059 2.149-4.347 3.323-1.268 1.155-2.101 2.165-2.41 2.906-.037.09-.036.131-.056.142-.02.01-.19.077-.38.152-1.037.403-1.942.634-2.618.663a3.116 3.116 0 0 1-.63-.043c-.124-.026-.275-.086-.333-.14-.071-.067-.099-.179-.104-.319-.006-.177.03-.398.104-.655a6.95 6.95 0 0 1 .32-.797l.21-.113c1.133-.428 2.415-1.049 3.615-1.749 1.622-.946 3.488-2.257 5.159-3.629.995-.817 1.53-1.332 2.038-1.96.396-.49.717-1.04.79-1.348a1.016 1.016 0 0 0-.012-.579.772.772 0 0 0-.35-.416c-.446-.262-1.255-.159-2.35.334-1.034.467-2.327 1.27-3.788 2.373-.873.657-2.095 1.673-2.741 2.279-1.648 1.546-2.778 2.89-3.404 4.048l-.042.079c-.554.208-1.41.45-1.838.523-.358.06-.702.076-.905.036a.526.526 0 0 1-.29-.136.656.656 0 0 1-.15-.322c-.05-.221-.034-.585.031-.854.204-.83.876-2.022 1.902-3.39l.223-.295.23-.089c1.52-.583 3.407-1.633 5.08-2.828.929-.663 1.926-1.486 2.604-2.149a12.08 12.08 0 0 0 1.301-1.465c.293-.4.478-.74.56-1.028.093-.32.064-.584-.069-.806a.735.735 0 0 0-.45-.338 1.225 1.225 0 0 0-.637.02c-.701.19-1.747.817-3.241 1.956a52.803 52.803 0 0 0-1.964 1.647c-1.527 1.4-2.88 2.831-4.025 4.256l-.217.27-.121.036c-.353.104-.758.18-1.045.198-.167.01-.39-.013-.486-.057-.051-.023-.06-.03-.09-.07-.052-.072-.064-.141-.068-.28-.022-.604.397-1.626 1.092-2.71.264-.412.57-.835.894-1.241l.157-.197c.498-.154.992-.468 1.736-1.092.855-.72 1.69-1.624 1.923-1.936.271-.364.375-.726.33-.869a.434.434 0 0 0-.165-.218.39.39 0 0 0-.26-.07c-.131.013-.432.174-.832.464-.282.205-1.068.853-1.411 1.165-.627.568-1.041.983-1.558 1.564l-.163.182a.785.785 0 0 1-.386-.016.447.447 0 0 0-.219-.017Zm6.244.772c.435-.378.618-.53 1.215-1.011.722-.58 1.515-1.131 2.097-1.456.285-.16.552-.285.76-.327-.048.1-.122.227-.201.347-.387.581-.977 1.242-1.861 2.087-.267.256-1.6 1.372-1.932 1.62-1.12.835-2.154 1.5-3.216 2.069-.135.072-.297.155-.453.234a39.323 39.323 0 0 1 3.59-3.563Zm5.565 2.1c1.122-.678 2.08-1.075 2.535-1.096a.999.999 0 0 1-.044.127c-.178.42-.676 1.03-1.387 1.71-.292.28-1.436 1.234-1.968 1.643-2.55 1.955-4.644 3.271-6.68 4.194.357-.482.858-1.076 1.332-1.573a30.19 30.19 0 0 1 3.074-2.785c1.214-.958 2.184-1.643 3.138-2.22Zm.677 4.91c.833-.653 1.578-1.175 2.128-1.496-.052.07-.106.14-.156.205-.878 1.112-1.927 2.11-3.237 3.073a22.686 22.686 0 0 1-2.339 1.514c.446-.513 1.01-1.074 1.779-1.77.2-.183 1.56-1.32 1.825-1.527Z"
      />
      <ellipse className="dark" cx="12.527" cy="12.321" rx="4.861" ry="4.871" />
      <path
        className="light"
        d="M21.828 11.95c.096.037.117.049.22.172.097.116.11.143.131.244.026.13.01.295-.052.455-.202.533-1.182 1.776-2.194 2.773-1.116 1.101-2.792 2.334-4.36 3.209-.429.239-1.124.586-1.445.722l-.012.01-.805.33c-.081.03-.194.07-.31.11l-.078.027c-.155.053-.305.104-.382.128-1.839.576-3.209.595-3.86.108l.606-.686c.058.055.21.114.333.14.147.032.444.053.63.044.676-.03 1.58-.26 2.619-.664.188-.074.36-.14.38-.152l1.838-.897c.774-.433 1.57-.949 2.34-1.514 1.309-.964 2.358-1.961 3.236-3.073a8.72 8.72 0 0 0 .156-.206l1.01-1.28Zm-.77-3.962c.171.1.288.242.35.416.057.165.064.36.011.579-.073.307-.394.859-.79 1.348-.507.627-1.043 1.143-2.038 1.96-1.671 1.371-3.537 2.683-5.159 3.629-1.2.7-2.482 1.32-3.614 1.749l-.21.113-1.326.404c-.201.06-.472.135-.648.176-.835.197-1.497.231-1.948.11a1.406 1.406 0 0 1-.677-.397 1.67 1.67 0 0 1-.38-.73l.92-.144a.657.657 0 0 0 .15.322c.07.072.165.112.29.137.203.04.547.024.905-.036.428-.073 1.284-.315 1.838-.523l1.738-.706c2.036-.923 4.13-2.24 6.68-4.194.532-.41 1.676-1.363 1.968-1.643.711-.68 1.21-1.291 1.387-1.71.018-.042.034-.09.044-.127l.509-.733ZM16.96 3.96a.73.73 0 0 1 .451.337c.133.223.162.486.07.807-.083.288-.268.627-.56 1.028-.333.454-.764.939-1.302 1.465-.678.663-1.675 1.486-2.603 2.148-1.674 1.195-3.561 2.245-5.081 2.83l-.23.088-.81.244-.735.166c-.376.057-.75.06-.993.008-.297-.063-.482-.169-.64-.354-.212-.252-.302-.575-.266-1.038l.806.247c.004.139.016.208.069.28.03.04.038.047.089.07.097.043.319.067.486.057.113-.007.297-.039.48-.075l.06-.012c.243-.05.468-.103.5-.11l.005-.001 2.102-.865.005-.003.448-.231a25.26 25.26 0 0 0 3.216-2.069 44.281 44.281 0 0 0 1.932-1.62c.884-.845 1.474-1.506 1.86-2.087.08-.12.128-.245.202-.347l.44-.963Z"
      />
    </SVG>
  )
}