import styled, {css} from "styled-components";

interface IProps {
    active: boolean
}

const activeStyles = css`
  background: #2ecc71;
`

const border = '1px solid #000'

export const SelectItem = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${border};
  border-bottom: ${border};
  padding: 10px 20px;
  border-right: ${border};
  
  &:first-child {
    border-left: ${border};
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  ${
          props => props.active ?
                  activeStyles :
                  css`
                    &:hover {
                      background: #e67e22;
                    }
                  `
  }
`