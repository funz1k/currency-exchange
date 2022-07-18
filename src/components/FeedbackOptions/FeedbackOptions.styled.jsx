import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 300ms ease;
  border: 1px solid black;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: #666666;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    color: #f3f6f9;
    transition: all 300ms ease;
  }
`;
