"""create nut.vote-logs table

Revision ID: 1e6fe5d4d117
Revises: 5a8f41ceb966
Create Date: 2023-05-25 14:46:11.109101

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e6fe5d4d117'
down_revision = '5a8f41ceb966'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'vote_logs',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('ip', sa.String(length=45), nullable=False),
        sa.Column('star_', sa.Integer, nullable=False),
        sa.Column('comment', sa.Text, nullable=False),
        sa.Column('comment_editor', sa.Integer, nullable=False),
        sa.Column('resource_type', sa.String(length=255), nullable=False),
        sa.Column('resource_id', sa.Integer, nullable=False),
        sa.Column('status', sa.Integer, nullable=False),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_vote_logs_resource_type',
                    'vote_logs', ['resource_type'])
    op.create_index('idx_vote_logs_ip', 'vote_logs', ['ip'])


def downgrade() -> None:
    op.drop_table('vote_logs')
