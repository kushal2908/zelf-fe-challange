import moment from "moment";
import classes from "./styles.module.css";

/*
this is the columns of the table
 - name is column's name
 - selector is the key that has been selected via api
 - cell is where we customize the selectors value
*/

export const UserColumns = [
  {
    name: "Date",
    selector: (row) => row?.content?.timestamp,
    cell: (row) => <>{moment(row?.content?.timestamp).format("MMM d")}</>,
    width: "100px",
  },
  {
    name: "Video",
    selector: (row) => row?.content?.id,
    cell: (row) => (
      <>
        <div className={classes.video}>
          <span style={{ color: "#3354FF", marginRight: "4px" }}>&#9654;</span>
          {row?.content?.id}
        </div>
      </>
    ),
  },

  {
    name: "Creator",
    selector: (row) => row?.creator?.id,
    cell: (row) => (
      <>
        <div className={classes.profilePicture}>
          <img width={24} src={row?.creator?.profile_picture_url} alt={""} />
          <span style={{ marginLeft: "4px" }}>@</span>
          {row?.creator?.username}
        </div>
      </>
    ),
  },
  {
    name: "Platform",
    selector: (row) => row?.content?.content_platform,
    cell: (row) => (
      <>
        <div>
          {/* This is conditonal rendering, other social media icon will be added */}
          {row?.content?.content_platform === "instagram" && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              width={14}
              height={14}
            />
          )}
        </div>
      </>
    ),
  },
  {
    name: "Total views",
    selector: (row) => row?.content?.views,
    cell: (row) => <>{row?.content?.views}</>,
    sortable: true,
  },
  {
    name: "Total engagement",
    selector: (row) => row?.content?.id,
    cell: (row) => <>{row?.content?.total_engagement}</>,
    sortable: true,
  },
  {
    name: "Engagement Rate",
    selector: (row) => row?.content?.id,
    cell: (row) => <>{row?.content?.engagement_of_views?.toFixed(2) + "%"}</>,
    sortable: true,
  },
];
