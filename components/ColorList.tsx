import { defineComponent } from 'vue';
import { ColorIntroduction } from '~/ts/colors';

const ColorList = defineComponent({
  name: 'ColorList',
  props: {
    from: {
      type: String,
      required: true,
      validator: (value: string) => ['js', 'less', 'css', 'sass'].includes(value),
    },
    colors: {
      type: Array as () => ColorIntroduction[],
      required: true
    }
  },
  render() {
    const getName = (color: ColorIntroduction) => {
      switch (this.from) {
        case 'js':
          return color.jsName;
        case 'less':
          return color.lessName;
        case 'css':
          return color.cssName;
        case 'sass':
          return color.scssName;
        default:
          return '';
      }
    };
    return (
      <div>
        <ul>
          {this.colors.map((color) => (
            <li
              key={color.jsName}
              style={{ backgroundColor: color.color, color: color.textColor }}
            >
              {getName(color)}
            </li>
          ))}
        </ul>
      </div>
    );
  },
});

export default ColorList;
