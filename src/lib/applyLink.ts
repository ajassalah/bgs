type ApplyLinkOptions = {
  title: string;
  path: string;
  subject?: string;
};

export function buildApplyHref({ title, path, subject }: ApplyLinkOptions) {
  const params = new URLSearchParams({
    sourceTitle: title,
    sourcePath: path,
    subject: subject || `Enquiry about ${title}`,
  });

  return `/apply?${params.toString()}`;
}
