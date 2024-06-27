import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../State';
import { bindActionCreators } from 'redux';
// import { depositMoney, withdrawMoney } from '../State/action-creators';

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h2> Deposit/Withdraw Money </h2>
      {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button>
      Update balance
      <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button> */}

      <button className='btn btn-primary mx-2 my-3' onClick={() => { withdrawMoney(100) }}> - </button>
      Update balance: {balance}
      <button className='btn btn-primary mx-2 my-3' onClick={() => { depositMoney(100) }}> + </button>
    </div>
  )
}

export default Shop
