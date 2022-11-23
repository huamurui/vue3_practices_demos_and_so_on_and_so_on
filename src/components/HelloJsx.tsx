
const HelloJsx = () => {
  return (
    <>
      <button onClick={clickTap}>点击</button>
    </>
  )
}

const clickTap = () => {
  console.log('click');
}

export default HelloJsx