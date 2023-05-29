"""create nut.comments table

Revision ID: 718e07955d43
Revises: ddf53d1365d6
Create Date: 2023-05-25 17:57:52.064673

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '718e07955d43'
down_revision = 'ddf53d1365d6'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'comments',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('username', sa.String(63), nullable=False),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('comment_id', sa.Integer),
        sa.Column('content', sa.Text, nullable=False),
        sa.Column('content_editor', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime, nullable=False),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_comments_ip', 'comments', ['ip'])
    op.create_index('idx_comments_user_name', 'comments', ['username'])
    op.create_index('idx_comments_resource_type',
                    'comments', ['resource_type'])


def downgrade() -> None:
    op.drop_table('comments')
