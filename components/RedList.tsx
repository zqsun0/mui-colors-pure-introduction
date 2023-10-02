import { defineComponent } from 'vue'
import redList from '~/ts/red'
import { ColorIntroduction } from '~/ts/colors'

const RedList = defineComponent({
  name: 'RedList',
  props: {
    from: {
      type: String,
      required: true,
      validator: (value: string) =>
        ['js', 'less', 'css', 'sass'].includes(value),
    },
  },
  render() {
    const getName = (color: ColorIntroduction) => {
      switch (this.from) {
        case 'js':
          return color.jsName
        case 'less':
          return color.lessName
        case 'css':
          return color.cssName
        case 'sass':
          return color.scssName
        default:
          return ''
      }
    }
    return (
      <div>
        <ul>
          {redList.map((color) => (
            <li key={color.jsName} style={{ backgroundColor: color.color }}>
              {getName(color)}
            </li>
          ))}
        </ul>
      </div>
    )
  },
})

export default RedList
