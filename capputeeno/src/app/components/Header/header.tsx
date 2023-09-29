
import React from 'react';
import * as C from './styles';
import { PrimaryInput, PrimaryInputWSearchIcon } from './primary-input';
import { Saira_Stencil_One } from 'next/font/google'
import { CartControl } from './cart-control';

const sairaStencilOne = Saira_Stencil_One({ weight: ['400'], subsets: ['latin'] })

interface HeaderProps {

}

const header = ({  }: HeaderProps) => {
  return (
    <C.TagHeader>
        <C.Logo className={sairaStencilOne.className}>capputeeno</C.Logo>
        <PrimaryInputWSearchIcon placeholder='Procurando por algo específico?'/>
        <CartControl/>
    </C.TagHeader>
  )
}

export default header
