# Utilize-Assessment

### **Problem Statement**

Make an icon picker component (sample image attached below). The icon picker opens up when a small 100X100 `div` is clicked. The icon picker component should accept the following `props`:

- `rowsInOnePage`
- `columnsInOnePage`
- `iconHeight`
- `iconWidth`
- `pickerHeight` (default = 500px)
- `pickerWidth` (default = 500px)

If the icons can’t be accommodated on the current page (based on icon size and icon picker size), then they should be paginated to the next page. 

On selecting an icon in the icon picker, the icon picker should dismiss and the selected icon should show up in the `div` mentioned earlier.
