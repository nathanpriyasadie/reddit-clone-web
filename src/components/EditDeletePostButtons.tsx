import { Box, IconButton, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();
  if (meData?.me?.id !== creatorId) {
    return null;
  }
  return (
    <Box>
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          ml="auto"
          mr={4}
          icon="edit"
          aria-label="edit post"
          onClick={() => {}}
        />
      </NextLink>
      <IconButton
        ml="auto"
        icon="delete"
        aria-label="delete post"
        onClick={() => {
          deletePost({ id });
        }}
      />
    </Box>
  );
};