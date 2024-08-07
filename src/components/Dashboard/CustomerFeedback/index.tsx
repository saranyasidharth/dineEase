import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const reviewList = [
  {
    user: "Jenny Wilson",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    user: "Ram",
    rating: 3,
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  },
  {
    user: "Joey Jacob",
    rating: 5,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dom, totam rem aperiam.",
  },
];

export default function CustomerFeedback() {
  return (
    <Paper elevation={3} sx={{ mt: 2, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Customer's Feedback
      </Typography>
      {reviewList.map((review, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            mb={1}
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Avatar alt={review.user} src="/static/images/avatar/3.jpg" />
            {review.user}
          </Typography>
          <Rating name="read-only" value={review.rating} readOnly />
          <Typography variant="body1" sx={{ mt: 1 }}>
            {review.description}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}
