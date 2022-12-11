export function getDateSincePost(postDate: number): string {
  let timeSince = Date.now() / 1000 - postDate;
  let days = Math.floor(timeSince / (60 * 60 * 24));

  if (days) return days + " days ago";

  const hours = Math.floor(timeSince / (60 * 60));

  if (hours) return hours + " hours ago";

  const minutes = Math.floor(timeSince / 60);

  return minutes + " minutes ago";
}
