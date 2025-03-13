import Select from "react-select";
import styled from "styled-components";
import { IMultiSelectProps } from "./type";

export const StyledMultiSelect = styled(Select)<IMultiSelectProps>`
  .react-select__control {
    width: ${(props) => props.width || "300px"};
    background: ${(props) => props.theme.colors.secondary};
    border: 1px solid ${(props) => props.theme.colors.lightPurple};
    border-radius: 4px;
    font-family: ${(props) => props.theme.fonts.body};
    transition: border-color 0.3s;
    padding: 2px;
    cursor: text;
    margin: 5px 0px;

    &:hover {
      border-color: ${(props) => props.theme.colors.darkPurple};
    }

    &:focus {
      outline: none;
    }
  }

  .react-select__menu {
    width: ${(props) => props.width || "300px"};
    background: ${(props) => props.theme.colors.background};
    cursor: pointer;
    border: solid 1px ${(props) => props.theme.colors.menu};
  }

  .react-select__option {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;

    &:hover {
      background: ${(props) => props.theme.colors.lightPurple};
    }
  }

  .react-select__multi-value {
    background: ${(props) => props.theme.colors.darkPurple};
    border-radius: 4px;
    padding: 4px;
    display: flex;
    align-items: center;
    margin: 2px;
  }

  .react-select__multi-value__label {
    color: ${(props) => props.theme.colors.white};
  }

  .react-select__multi-value__remove {
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      background: ${(props) => props.theme.colors.lightPurple};
    }
  }
`;

export const MultiValueContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.mediumPurple};
  color: ${(props) => props.theme.colors.white};
  padding: 4px;
  border-radius: 4px;
  margin: 2px;
`;

export const RemoveIcon = styled.span`
  margin-left: 8px;
  cursor: pointer;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

export const Checkbox = styled.input`
  margin-right: 8px;
`;
