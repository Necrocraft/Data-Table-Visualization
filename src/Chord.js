import {connect} from "react-redux";
import { ResponsiveChord } from "@nivo/chord";

function MyResponsiveChord(props) {
  return (
    <ResponsiveChord
      matrix={props.matrix}
      keys={props.keys}
      margin={{ top: 60, right: 60, bottom: 90, left: 60 }}
      valueFormat=".2f"
      padAngle={0.02}
      innerRadiusRatio={0.96}
      innerRadiusOffset={0.02}
      arcOpacity={1}
      arcBorderWidth={1}
      arcBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      ribbonOpacity={0.5}
      ribbonBorderWidth={1}
      ribbonBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
      enableLabel={true}
      label="id"
      labelOffset={12}
      labelRotation={-90}
      labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
      colors={{ scheme: "category10" }}
      isInteractive={true}
      arcHoverOpacity={1}
      arcHoverOthersOpacity={0.25}
      ribbonHoverOpacity={0.75}
      ribbonHoverOthersOpacity={0.25}
      animate={true}
      motionStiffness={90}
      motionDamping={7}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 70,
          itemWidth: 50,
          itemHeight: 14,
          itemsSpacing: 0,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

const mapStateToProps = state => ({
    matrix: state.table_store.matrix,
    keys: state.table_store.keys
})

export default connect(mapStateToProps)(MyResponsiveChord);
