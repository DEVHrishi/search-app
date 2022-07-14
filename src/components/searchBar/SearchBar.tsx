import React from 'react'
import styled from "styled-components";
import { RiSearchLine } from 'react-icons/ri';

const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 3.8em;
    background-color: var(--color-bg);
    border-radius: 1rem;
    box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
    overflow: hidden;
`;

const SearchInputContainer = styled.div`
    width: 100%;
    min-height: 4em;
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem 2rem;
    background-color: var(--color-bg);
`;

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--color-text);
    border-radius: 1rem;

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 0;
        }
    }

    &::placeholder {
        color: rgba(77, 75, 73, 0.5);
        transition: var(--transition-all);
    }
`;

const SearchIcon = styled.span`
    color: rgba(145, 118, 100, 0.5);
    font-size: 2rem;
    vertical-align: middle;
    margin-top: 0.5rem;
`

export const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchInputContainer>
                <SearchInput placeholder="Search" />
                <SearchIcon>
                    <RiSearchLine />
                </SearchIcon>
            </SearchInputContainer>
        </SearchBarContainer>

    )
}
