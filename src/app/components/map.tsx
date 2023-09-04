import { Chart } from "react-google-charts"

export const data = [
  ['Country', 'Name'],
  ['Germany', 'ドイツ'],
  ['United States', 'アメリカ'],
  ['Brazil', 'ブラジル'],
  ['Canada', 'カナダ'],
  ['France', 'フランス'],
  ['RU', 'ロシア'],
]

export const Map = () => {
  return(
    <Chart
      width='100%'
      height='400px'
      data={data}
     />
  )
}
