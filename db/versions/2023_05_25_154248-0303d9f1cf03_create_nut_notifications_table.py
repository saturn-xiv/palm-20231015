"""create nut.notifications table

Revision ID: 0303d9f1cf03
Revises: 1e6fe5d4d117
Create Date: 2023-05-25 15:42:48.771252

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0303d9f1cf03'
down_revision = '1e6fe5d4d117'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'notifications',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, nullable=False),
        sa.Column('subject', sa.String(length=127), nullable=False),
        sa.Column('body', sa.Text, nullable=False),
        sa.Column('url', sa.String(length=255), nullable=False),
        sa.Column('status', sa.Integer, nullable=False),
        sa.Column('read_at', sa.DateTime),
        sa.Column('deleted_at', sa.DateTime),
        sa.Column('version', sa.Integer, nullable=False, server_default='0'),
        sa.Column('updated_at', sa.DateTime),
        sa.Column('created_at', sa.DateTime,
                  nullable=False, server_default=sa.func.current_timestamp())
    )
    op.create_index('idx_notifications_subject', 'notifications', ['subject'])


def downgrade() -> None:
    op.drop_table('notifications')
