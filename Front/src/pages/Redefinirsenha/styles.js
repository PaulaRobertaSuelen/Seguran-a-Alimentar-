import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const LeftSide = styled.div`
    width: 40vw;
    background-color: #0c3a77;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Logo = styled.div`
    position: absolute;
    top: 280px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const BackgroundImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.2;
`;

export const RightSide = styled.div`
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Content = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export const RedefinirTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const RedefinirTitle = styled.h1`
    font-size: 2.3rem;
    font-weight: bold;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    padding: 50px;
    border-radius: 10px;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 300px;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 40px 10px 30px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
`;

export const Icon = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #666;
    &:hover {
        color: #000;
    }
`;

export const LockIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
`;

export const PasswordStrength = styled.p`
    text-align: left;
    width: 300px;
    color: ${({ theme }) => (theme === 'strong' ? '#28a745' : '#dc3545')};
    font-size: 0.9rem;
    margin-top: -15px;
    margin-bottom: 15px;
`;

export const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #218838;
    }
`;
